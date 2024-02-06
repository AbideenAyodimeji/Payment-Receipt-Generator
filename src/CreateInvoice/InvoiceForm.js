import React, { useState } from 'react'
import InvoicePDF from '../getPdf/InvoicePdf'
import { PDFDownloadLink } from '@react-pdf/renderer'
import './styles.css'
import logo from './icons8-info.svg'

const InvoiceForm = () => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const [billFrom, setBillFrom] = useState({
    AccountNumber: '',
    SwiftCode: '',
    RecipientName: '',
    SenderName: '',
    EnterAmount: '',
    Memo: '',
    date: new Date().toLocaleDateString('en-US', options),
  })

  const handleBillFromData = e => {
    e.preventDefault()
    const { name, value } = e.target
    setBillFrom({
      ...billFrom,
      [name]: value,
    })
  }

  return (
    <div className='invoice'>
      <div className='container'>
        <div className='titleContainer'>
          <img
            width='40'
            height='40'
            src='https://img.icons8.com/ultraviolet/40/details-popup.png'
            alt='details-popup'
          />
          <h1 className='title'>
            Payment information <br />
            <span style={{ fontSize: '13px' }}>
              Provide your details for payment
            </span>
          </h1>
        </div>

        <div className='firstRow'>
          <div className='inputName'>
            <label>Account Number</label>
            <input
              name='AccountNumber'
              className='input'
              type='text'
              value={billFrom.AccountNumber}
              onChange={handleBillFromData}
              placeholder='0002304312'
            />
          </div>

          <div className='inputName'>
            <label>Swift Code</label>
            <input
              name='SwiftCode'
              className='input'
              type='text'
              value={billFrom.SwiftCode}
              onChange={handleBillFromData}
              placeholder='Swift code'
            />
          </div>

          <div className='inputName'>
            <label>Recipient's name</label>
            <input
              name='RecipientName'
              className='input'
              type='text'
              value={billFrom.RecipientName}
              onChange={handleBillFromData}
              placeholder="Recipient's name"
            />
          </div>

          <div className='inputName'>
            <label>Sender's name</label>
            <input
              name='SenderName'
              className='input'
              type='text'
              value={billFrom.SenderName}
              onChange={handleBillFromData}
              placeholder="Sender's name"
            />
          </div>

          <div className='inputName'>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                marginTop: 10,
              }}
            >
              <label>Enter Amount</label>
              <img src={logo} style={{ height: 15, marginTop: 4 }} alt='Logo' />
            </div>
            <input
              name='EnterAmount'
              className='input'
              type='text'
              value={billFrom.EnterAmount}
              onChange={handleBillFromData}
              placeholder='$0.00'
            />
          </div>

          <div className='inputName'>
            <div
              style={{
                display: 'flex',
                gap: 5,
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <label>Memo</label>
              <img src={logo} style={{ height: 15, marginTop: 4 }} alt='Logo' />
            </div>

            <input
              name='Memo'
              className='input'
              type='text'
              value={billFrom.Memo}
              onChange={handleBillFromData}
              placeholder='Memo'
            />
          </div>
        </div>

        <PDFDownloadLink
          document={
            <InvoicePDF
              billFrom={billFrom}
              // client={client}
              // total={total}
              // items={items}
            />
          }
          fileName={'Payment.pdf'}
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              'Loading...'
            ) : (
              <button className='button'>Generate Receipt</button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default InvoiceForm
