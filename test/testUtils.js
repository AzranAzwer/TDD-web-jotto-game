import checkPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[testID="${val}"]`);
};

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
