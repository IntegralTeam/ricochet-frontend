import React, {
  FC,
} from 'react';
import styles from './styles.module.scss';
import ButtonNew from '../../common/ButtonNew';

interface IProps {
  isUpgrade: boolean,
  isLoading: boolean,
  onClickApprove: () => void,
  onClickUpgrade: () => void,
  onClickDowngrade: () => void,

}

export const UpgradeDowngradeButtons: FC<IProps> = ({
  isUpgrade, isLoading, onClickApprove, onClickUpgrade, onClickDowngrade,
}) => (
  <div>
    {isUpgrade 
      ? (
        <div className={styles.buttons_upgrade}>
          <div className={styles.approve_wrap}>
            <ButtonNew
              color="secondary"
              disabled={isLoading}
              onClick={onClickApprove}
              className={styles.approve}
            >
              Approve

            </ButtonNew>
          </div>
          <div className={styles.upgrade_wrap}>
            <ButtonNew
              color="primary"
              disabled={isLoading} 
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
            color="primary"
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
