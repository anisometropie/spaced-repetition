import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'

import { PlusSquare } from 'react-feather'

export const SquareButtonWithTooltip = ({
  children,
  tooltipTitle,
  className,
  onClick,
}) => (
  <Tooltip title={tooltipTitle}>
    <div onClick={onClick} className={className}>
      {children}
    </div>
  </Tooltip>
)
