import classNames from 'classnames/bind'
import styles from './Buttons.module.scss'
const cx = classNames.bind(styles)
function Buttons({
  normal,
  children,
  outline,
  primary,
  circle,
  large,
  onClick,
  to,
  href,
  className,
  ...passProps
}) {
  const classes = cx('wrapper', {
    normal,
    primary,
    outline,
    circle,
    large,
    [className]: className,
  })
  const props = {
    onClick,
    ...passProps,
  }
  const Cpn = 'button'
  return (
    <Cpn className={classes} {...props}>
      <span>{children}</span>
    </Cpn>
  )
}

export default Buttons
