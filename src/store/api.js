import { createAction } from "@reduxjs/toolkit";

export const apiLawyersCall = createAction('api/LawyersCall');
export const apiCallSuccess = createAction('api/CallSuccess');
export const apiCallFailed = createAction('api/CallFailed')