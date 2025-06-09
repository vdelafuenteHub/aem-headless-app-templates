import { Image } from '@/components/atoms/Image';
import {
  EditableComponent,
  EditableComponentProps,
  MappedComponentProperties,
} from '@adobe/aem-react-editable-components';

export const config = {
  emptyLabel: 'Image',
  isEmpty: (props: { src?: string } & MappedComponentProperties) =>
    !props?.src || props?.src?.trim().length < 1,
  resourceType: 'components/image',
};

const AEMComponent = (props: EditableComponentProps & any) => (
  <EditableComponent config={config} {...props}>
    <Image alt={props?.alt} {...props} />
  </EditableComponent>
);

export default AEMComponent;
