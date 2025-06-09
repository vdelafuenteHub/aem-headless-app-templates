export type BackdropProps = React.PropsWithChildren<
  {
    component?: React.ElementType;
    open: boolean;
    zIndex?: number;
  } & React.AllHTMLAttributes<React.ElementType>
>;
