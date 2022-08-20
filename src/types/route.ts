import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DocItemType} from './doc';

export type RootStackParamList = {
  List: undefined;
  Doc: DocItemType;
  Setting: undefined;
};

type AppStackScreenProps<> = NativeStackScreenProps<
  RootStackParamList,
  'List' | 'Doc' | 'Setting'
>;

export type AppNavigationProps = AppStackScreenProps['navigation'];
export type AppRouteProps = AppStackScreenProps['route'];
