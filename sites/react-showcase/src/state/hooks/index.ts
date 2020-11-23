import { createTypedHooks } from 'easy-peasy';
import { Store } from '../models';

const typedHooks = createTypedHooks<Store>();

// We export the hooks from our store as they will contain the
// type information on them
export const { useStoreActions, useStoreDispatch, useStoreState } = typedHooks;
