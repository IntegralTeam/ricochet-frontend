import React, {
  FC,
} from 'react';
import styles from './styles.module.scss';
import ButtonNew from '../../common/ButtonNew';

interface IProps {
  isUpgrade: boolean,
  onClickApprove?: () => void,
  onClickUpgrade?: () => void,
  onClickDowngrade?: () => void,
  isLoading?: boolean;
  disabledApprove?:boolean;
}

export const UpgradeDowngradeButtons: FC<IProps> = ({
  isUpgrade, isLoading, disabledApprove, onClickApprove = () => {},
  onClickUpgrade = () => {}, onClickDowngrade = () => {},
}) => (
  <div>
    {isUpgrade 
      ? (
        <div className={styles.buttons_upgrade}>
          <div className={styles.approve_wrap}>
            <ButtonNew
              onClick={onClickApprove}
              className={styles.approve}
              disabled={isLoading || disabledApprove}
            >
              Approve

            </ButtonNew>
          </div>
          <div className={styles.upgrade_wrap}>
            <ButtonNew
              disabled={isLoading || !disabledApprove}
              onClick={onClickUpgrade}
              className={styles.upgrade}
            >
              Upgrade
            </ButtonNew>
          </div>
        </div>
      )
      : (
        <div className={styles.downgrade_wrap}>
          <ButtonNew
            disabled={isLoading}
            onClick={onClickDowngrade}
            className={styles.downgrade}
          >
            Downgrade
          </ButtonNew>
        </div>
      )}
  </div>
);
