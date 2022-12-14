// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import MeetingFormSelector from '../../containers/MeetingFormSelector';
import { StyledLayout } from './Styled';
import { VersionLabel } from '../../utils/VersionLabel';

const Join = () => (
  <StyledLayout>
    <MeetingFormSelector />
    <VersionLabel />
  </StyledLayout>
);

export default Join;
