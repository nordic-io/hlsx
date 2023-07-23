import { useStyles } from '@utils/helpers'

const useButtonStyles = () =>
  useStyles(theme => ({
    root: {
      backgroundColor: theme.colors.rewardsTier2
    }
  }))

export default useButtonStyles
