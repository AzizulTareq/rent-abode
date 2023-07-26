"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import { MdLocationOn } from "react-icons/md";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import HeartButton from "./HeartButton";
import Button from "./Button";

interface ListCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListCard: React.FC<ListCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="sm:flex items-center sm:justify-center py-4 px-2 border-b border-gray-300"
    >
      <div className="flex sm:block justify-center">
        <Image
          height={130}
          width={180}
          src={data.imageSrc}
          alt="Item"
          className="min-w-44 min-h-20 rounded-md"
        />
      </div>
      <div className="flex-grow sm:px-4 py-3">
        <div className="flex sm:block justify-center">
          <div className="flex">
            <p className="text-lg font-semibold">{data.title}</p>
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>

        <div className="flex sm:block justify-center font-semibold">
          {reservationDate || data.category}
        </div>
        <div className="flex sm:block justify-center">
          <div className="font-semibold">$ {price}</div>
          {!reservation && <div className="font-light">night</div>}
        </div>
        <div className="text-lg font-semibold flex sm:block justify-center text-neutral-400">
          <div className="flex">
            <MdLocationOn className="mt-1" /> {location?.region},{" "}
            {location?.label}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {onAction && actionLabel && (
          <button
            className="px-2 py-2 border-2 border-red-500 text-red-500 rounded-md text-sm font-semibold"
            onClick={handleCancel}
          >
            Cancel Guest Reservation
          </button>
        )}
      </div>
    </div>
  );
};

export default ListCard;
