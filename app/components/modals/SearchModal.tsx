'use client';

import dynamic from 'next/dynamic'
import { useCallback, useMemo, useState } from "react";
import { Range } from 'react-date-range';
import { useRouter, useSearchParams } from 'next/navigation';

import useSearchModal from "@/app/hooks/useSearchModal";

import Modal from "./Modal";
import CountrySelect, {
  CountrySelectValue
} from "../inputs/CountrySelect";
import Heading from '../Heading';

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
  const router = useRouter();
  const searchModal = useSearchModal();
  const params = useSearchParams();

  const [step, setStep] = useState(STEPS.LOCATION);

  const [location, setLocation] = useState<CountrySelectValue>();

  const Map = useMemo(() => dynamic(() => import('../Map'), {
    ssr: false
  }), [location]);

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);


  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return 'Search'
    }

    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return undefined
    }

    return 'Back'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where do you wanna go?"
        subtitle="Find the perfect location!"
      />
      <CountrySelect
        value={location}
        onChange={(value) =>
          setLocation(value as CountrySelectValue)}
      />
      <hr />
      <Map center={location?.latlng} />
    </div>
  )



  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Filters"
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
}

export default SearchModal;