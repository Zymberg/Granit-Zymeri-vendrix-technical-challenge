import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { styled } from '@mui/system';
// Components
import {
  Autocomplete,
  Checkbox,
  ListItem,
  Popper,
  TextField,
  Typography,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;

const checkedIcon = <CheckBoxIcon fontSize='small' />;

const PopperStyle = styled(Popper)(({ theme }) => ({
  width: 'fit-content',
}));

// ----------------------------------------------------------------------------------------

// ***** Component ***** //
interface Props {
  size?: 'small' | 'medium';
  fieldName: string;
  label?: string;
  control: any;
  options: readonly string[];
  defaultValue?: string;
  onChange?: (...event: any[]) => void;
  transformOptionLabel?: (optionLabel: string) => string;
  disabled?: boolean;
}
/**
 * @docs  "react-hook-form" Controller: https://react-hook-form.com/api/usecontroller/controller
 * @docs  MUI Autocomplete API: https://mui.com/material-ui/api/autocomplete/
 *        MUI Autocomplete examples: https://mui.com/material-ui/react-autocomplete/
 */
export default function StringSelect({
  size = 'small',
  fieldName,
  label,
  control,
  options,
  defaultValue,
  onChange,
  transformOptionLabel,
  disabled,
}: Props) {
  // HOOKS
  const { formState } = useFormContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <>
          <Autocomplete
            {...field}
            disabled={disabled}
            fullWidth
            size={size}
            // @ts-expect-error unknown
            PopperComponent={PopperStyle}
            options={options}
            disableClearable
            onChange={(_, data) => {
              field.onChange(data);
              onChange && onChange(data);
            }}
            renderOption={(props, option, { selected }) => (
              <ListItem
                {...props}
                key={`option-${option}`}
                sx={{ height: 40, fontSize: 13 }}
              >
                <Checkbox
                  key={`checkbox-${option}`}
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {transformOptionLabel ? transformOptionLabel(option) : option}
              </ListItem>
            )}
            getOptionLabel={(option) =>
              transformOptionLabel ? transformOptionLabel(option) : option
            }
            renderInput={(params) => (
              <TextField {...params} label={label} size='small' />
            )}
          />
          <ErrorMessage
            errors={formState.errors}
            name={fieldName}
            render={({ message }) => (
              <Typography
                variant='caption'
                sx={{ color: (theme) => theme.palette.error.main }}
              >
                {message}
              </Typography>
            )}
          />
        </>
      )}
    />
  );
}
