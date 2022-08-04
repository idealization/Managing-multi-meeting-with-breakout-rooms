// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Meeting, useAppState } from '../providers/AppStateProvider';

import { getErrorContext } from "../providers/ErrorProvider";
import routes from '../constants/routes';
import {
  fetchActiveMeetings,
} from "../utils/api";

interface Props {
  meetingId: string
  isBreakout: boolean,
  mainMeetingId? : string
  name? : string
}

const JoinMeetingRedirect: React.FC<Props> = ({ meetingId, mainMeetingId='', name='', isBreakout=false, children }) => {
  const history = useHistory();

  const {setAppMeetingInfo, setIsBreakout, setMainMeetingId} = useAppState();
  const [meetingArray, setMeetingArray] = useState<Meeting[]>([]);

  useEffect(() => {
    async function fetchMeetings() {
      try {
        await fetchActiveMeetings().then((data) => {
          setMeetingArray(data);
          return data;
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchMeetings();
    setAppMeetingInfo(meetingArray, meetingId, name ,'', false, {});
    setIsBreakout(isBreakout);
    if(isBreakout) setMainMeetingId(mainMeetingId);
    history.push(routes.JOIN_HOME);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default JoinMeetingRedirect;