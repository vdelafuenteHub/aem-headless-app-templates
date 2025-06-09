import {
  EditableComponent,
  ResponsiveGrid,
  ResponsiveGridComponentProps,
} from '@adobe/aem-react-editable-components';

const RESOURCE_TYPE = 'wcm/foundation/components/responsivegrid';

export const config = {
  emptyLabel: 'Layout Container',
  isEmpty: (props: any) =>
    props?.cqItemsOrder === null || props?.cqItemsOrder?.length === 0,
  resourceType: RESOURCE_TYPE,
};

const AEMComponent = ({
  isInEditor = false,
  ...restProps
}: ResponsiveGridComponentProps) => (
  <EditableComponent config={config} {...restProps}>
    <ResponsiveGrid
      customClassName="aemContainer"
      isInEditor={isInEditor}
      {...restProps}
    />
  </EditableComponent>
);

export default AEMComponent;
