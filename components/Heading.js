const Heading = (props) => {
  const { children, ...rest } = props;
  let styles;
  switch (props.size) {
    case "sm":
      styles =
        "font-display text-center text-gray-900 dark:text-gray-50 text-2xl px-4 leading-9 font-semibold sm:text-3xl sm:leading-10";
      break;
    default:
      styles =
        "font-display text-center text-gray-900 dark:text-gray-50 text-3xl leading-9 font-semibold sm:text-4xl sm:leading-10";
      break;
  }
  return (
    <h1 {...rest} className={styles}>
      {children}
    </h1>
  );
};

export default Heading;
