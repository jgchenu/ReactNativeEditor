import {useNavigation, useRoute} from '@react-navigation/native';
import {AppNavigationProps, AppRouteProps} from '../types';

export const useAppNavigation = useNavigation<AppNavigationProps>;

export const useAppRoute = useRoute<AppRouteProps>;
