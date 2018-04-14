import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { InputLabel } from "material-ui/Input";
import { Clear, Check } from "material-ui-icons";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import cx from "classnames";


import customInputStyle from "variables/styles/customInputStyle";

class SingleValuedDropdown extends React.Component {
  render() {
    const {
      classes,
      formControlProps,
      labelText,
      id,
      labelProps,
      inputProps,
      error,
      success,
      data,
      value,
      placeholder,
      handleChange
    } = this.props;
    const labelClasses = cx({
      [" " + classes.labelRootError]: error,
      [" " + classes.labelRootSuccess]: success && !error
    });

    const marginTop = cx({
      [classes.marginTop]: labelText === undefined
    });

    return (
        <FormControl
          {...formControlProps}
          className={formControlProps.className + " " + classes.formControl}
        >
          {labelText !== undefined ? (
            <InputLabel
              className={classes.labelRoot + labelClasses}
              htmlFor={id}
              {...labelProps}
            >
              {labelText}
            </InputLabel>
          ) : null}

          <Select
            classes={{
              root: marginTop,
              disabled: classes.disabled
            }}
            value={value}
            onChange={handleChange}
            id={id}
            {...inputProps}
          >
            <MenuItem value="">
              <em>{placeholder}</em>
            </MenuItem>
            {data.map((d, k) => (
              <MenuItem value={d.key} key={k}>{d.value}</MenuItem>
            ))}
          </Select>
          {error ? (
            <Clear
              className={classes.feedback + " " + classes.labelRootError}
            />
          ) : success ? (
            <Check
              className={classes.feedback + " " + classes.labelRootSuccess}
            />
          ) : null}
        </FormControl>
    );
  }
}

SingleValuedDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  value:PropTypes.string.isRequired,
  handleChange:PropTypes.func.isRequired
};

export default withStyles(customInputStyle)(SingleValuedDropdown);
