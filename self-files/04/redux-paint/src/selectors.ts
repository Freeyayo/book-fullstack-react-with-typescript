import { RootState } from "./types";

export const currentStrokeSelector = (state: RootState) => state.currentStroke;

export const historyIndexSelector = (state: RootState) => state.historyIndex;

export const strokesSelector = (State: RootState) => State.strokes;
