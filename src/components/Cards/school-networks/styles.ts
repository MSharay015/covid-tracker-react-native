import { View } from 'react-native';

import styled from '@covid/themes/styled-components';

import { Text } from '../../typography';

export const SContainerView = styled(View)`
  ${(props) => `
    background-color: white;
    border-radius: ${props.theme.grid.m}px;
    padding: ${props.theme.grid.l}px ${props.theme.grid.xxl}px;
  `}
`;

export const STitleText = styled(Text)`
  ${(props) => `
    margin-bottom: ${props.theme.grid.s}px;
    text-align: center;
  `}
`;

export const SSchoolNameText = styled(Text)`
  ${(props) => `
    margin-bottom: ${props.theme.grid.xxl}px;
    text-align: center;
  `}
`;

export const SBubbleNameText = styled(Text)`
  ${(props) => `
    margin-bottom: ${props.theme.grid.s}px;
  `}
`;

interface IStatsViewProps {
  isLast: boolean;
}

export const SStatsContainerView = styled(View)<IStatsViewProps>`
  ${(props) => `
    border-color: ${props.theme.colors.ui.dark.bgColor};
    border-bottom-width: ${props.isLast ? 0 : 1}px;
    margin-bottom: ${props.theme.grid.xxl}px;
    padding-bottom: ${props.theme.grid.m}px;
  `}
`;

export const SHealthStatus = styled(View)`
  ${(props) => `
    align-items: center;
    flex-direction: row;
  `}
`;

export const SHealthStatusText = styled(Text)`
  ${(props) => `
    margin-left: ${props.theme.grid.s}px;
  `}
`;
