import { MapTo } from '@adobe/aem-react-editable-components';

import ResponsiveGrid, {
  config as responsiveGridEditConfig,
} from './ResponsiveGrid';

MapTo(responsiveGridEditConfig.resourceType)(ResponsiveGrid as any);
