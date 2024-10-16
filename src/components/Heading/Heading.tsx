/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { FC } from 'react';
import { getComponentTag, getVariantStyles, TypographyProps } from '../../util/Typegraphy';


const Typography: FC<TypographyProps> = ({ variant, children, color = 'black' }) => {
  const theme = useTheme(); 
  const Component = getComponentTag(variant); 

  return (
    <Component
      css={css`
        ${getVariantStyles(theme, variant)}
        color: ${theme.colors[color] || theme.colors.black};
      `}
    >
      {children}
    </Component>
  );
};

export default Typography;
