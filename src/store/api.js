import { createAction } from "@reduxjs/toolkit";

export const apiLawyersCall = createAction('api/LawyersCall');
export const apiLitigationsCall = createAction('api/LitigationsCall');
export const apiCallSuccess = createAction('api/CallSuccess');
export const apiCallFailed = createAction('api/CallFailed');
export const litCallSuccess = createAction('lit/CallSuccess');
export const litCallFailed = createAction('lit/CallFailed');