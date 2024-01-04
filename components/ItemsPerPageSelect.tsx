'use client';

import { createPageURL } from '@/lib/utils';
import { Select, SelectItem } from '@nextui-org/react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function ItemsPerPageSelect() {
  const options = [3, 5, 10, 15, 20, 30, 50];
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select
      label="Stories per page"
      placeholder="5"
      size="sm"
      className="max-w-sm"
      onChange={(e) => {
        router.replace(
          createPageURL(pathname, searchParams, {
            amount: e.target.value,
          })
        );
      }}
    >
      {options.map((option) => (
        <SelectItem
          key={option}
          value={option.toString()}
          textValue={option.toString()}
        >
          {option}
        </SelectItem>
      ))}
    </Select>
  );
}
