import { Switch } from '@nextui-org/react';
import MoonIcon from '@/components/svg/MoonIcon';
import SunIcon from '@/components/svg/SunIcon';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type DarkModeSwitchProps = {
  className?: string;
};

export default function DarkModeSwitch({ className }: DarkModeSwitchProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleValueChange(isSelected: boolean) {
    if (isSelected) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={theme === 'light'}
      size="lg"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onValueChange={handleValueChange}
      className={className}
    ></Switch>
  );
}
