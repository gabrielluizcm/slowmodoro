import React from 'react';
import { useTranslation } from 'react-i18next';

import { Status } from '../../organisms/MainTimer';

import { StyledStatus } from './styled';

type StatusLabelProps = {
  status: Status;
  reversePomodoros: number;
};

export function StatusLabel(props: StatusLabelProps) {
  const { t } = useTranslation();

  let status = t('statusIdle');
  if (props.status === 'chilling') status = t('statusChill');
  else if (props.reversePomodoros && props.reversePomodoros % 4 === 0)
    status = t('statusLongWork');
  else status = t('statusShortWork');

  return <StyledStatus>{status}</StyledStatus>;
}
