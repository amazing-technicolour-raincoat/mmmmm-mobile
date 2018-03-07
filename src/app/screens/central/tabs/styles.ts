/**
 * MMMMM is a mobile app for Secure Scuttlebutt networks
 *
 * Copyright (C) 2017 Andre 'Staltz' Medeiros
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {StyleSheet} from 'react-native';
import {Palette} from '../../../global-styles/palette';
import {Dimensions} from '../../../global-styles/dimens';
import {Typography} from '../../../global-styles/typography';

const _tabItem = {
  backgroundColor: Palette.brand.background,
  paddingTop: Dimensions.verticalSpaceNormal,
  paddingBottom: Dimensions.verticalSpaceNormal,
};

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Palette.white,
  },

  tabItem: _tabItem,

  tabItemSelected: {
    ..._tabItem,
    borderBottomWidth: 4,
    borderBottomColor: Palette.brand.backgroundLighterContrast,
  },

  indicatorViewPager: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: Palette.brand.backgroundDarker,
  },

  pageContainer: {
    backgroundColor: Palette.brand.voidBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pagePlaceholder: {
    fontSize: Typography.fontSizeBig,
    fontFamily: Typography.fontFamilyReadableText,
    textAlign: 'center',
  },
});

export const iconProps = {

  tab: {
    size: Dimensions.iconSizeNormal,
    color: Palette.brand.backgroundDarkerContrast,
  },

  tabSelected: {
    size: Dimensions.iconSizeNormal,
    color: Palette.white,
  },
};
