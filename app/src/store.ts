import {StoryState} from './reducers/stories';

interface StoreEnhancerState {
}

export interface RootState extends StoreEnhancerState {
  stories: StoryState;
}

