import {
  faAddressCard,
  faRocketLaunch,
  faCode,
  faBriefcase,
  IconDefinition,
} from '@fortawesome/pro-regular-svg-icons';

export type AllowedIcons =
  | 'address-card'
  | 'rocket-launch'
  | 'code'
  | 'briefcase';

export const getIcon = (icon: AllowedIcons): IconDefinition => {
  switch (icon) {
    case 'address-card':
      return faAddressCard;
    case 'rocket-launch':
      return faRocketLaunch;
    case 'code':
      return faCode;
    case 'briefcase':
      return faBriefcase;
  }
};
