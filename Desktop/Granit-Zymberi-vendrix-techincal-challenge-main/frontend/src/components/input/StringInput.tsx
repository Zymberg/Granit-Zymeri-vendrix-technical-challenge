import { Controller } from 'react-hook-form';
// Components
import { TextField } from '@mui/material';
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

interface Props {
  size?: 'small' | 'medium';
  fieldName: string;
  label: string;
  control: any;
  defaultValue?: any;
  onChange?: (d?: any) => void;
  disabled?: boolean;
}
/**
 * @docs  "react-hook-form" Controller: https://react-hook-form.com/api/usecontroller/controller
 * @docs  MUI TextField API: https://mui.com/material-ui/api/text-field/
 *        MUI TextField examples: https://mui.com/material-ui/react-text-field/
 */
export default function StringInput({
  size = 'small',
  fieldName,
  label,
  control,
  defaultValue,
  onChange,
  disabled,
}: Props) {
  return (
    <Controller
      name={fieldName}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState, formState }) => (
        <>
          <TextField
            {...field}
            disabled={disabled}
            fullWidth
            size={size}
            label={label}
            error={Boolean(fieldState?.error)}
            helperText={fieldState?.error?.message}
            onChange={(data) => {
              field.onChange(data);
              onChange && onChange();
            }}
          />
        </>
      )}
    />
  );
}
