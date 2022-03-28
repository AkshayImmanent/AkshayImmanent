import { lazy } from 'react'
import CreditSense from '../credit-sense'
// const LazyLoadCreditSense = lazy(() => import("../credit-sense"))

import {
  WelcomeToFundablHeader,
  LinkBankStatement,
  UploadSubscriptionCSV,
  LinkAccounts,
  FormWizard
} from "../components"

export const Dashboard = () => {
  return (
    <section className="welcome">
      <div className="container">
        <div className="inner_welcome">
          <WelcomeToFundablHeader />
          <div className="welcome_grd">
            <div className="welcome_left">
              <LinkBankStatement />
              <UploadSubscriptionCSV />
              <LinkAccounts />
            </div>
            <FormWizard/>          
          </div>
        </div>
      </div>
    </section >
  )
}
