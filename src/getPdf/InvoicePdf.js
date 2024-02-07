import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer'
import '../CreateInvoice/InvoiceForm'
import headerLogo from './logo.png'
import backgroundImg from './logo5.png'

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 220,
    left: 180,
    width: '40%',
    height: '30%',
    zIndex: -1,
  },

  image: {
    width: 40,
    height: 30,
    color: 'white',
    fontWeight: 600,
  },

  label: {
    fontSize: 10,
    marginBottom: 7,
    color: '#aaa',
  },
  input: {
    fontSize: 12,
    marginBottom: 6,
    paddingBottom: 5,
  },
})

const InvoicePDF = ({ billFrom, inputValue }) => {
  return (
    <Document>
      <Page size='A4' style={{ flexDirection: 'column', maxHeight: '80vh' }}>
        <Image src={backgroundImg} style={styles.backgroundImage} />

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 40,
              paddingVertical: 4,
              backgroundColor: '#89CFF0',
              height: '5vh',
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src={headerLogo} style={styles.image} />
              <Text style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>
                Cudium
              </Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 15 }}>
              <Image
                src={backgroundImg}
                style={{
                  width: '35%',
                  height: '35%',
                  position: 'relative',
                  top: 50,
                  left: 40,
                }}
              />
              <Image
                src={backgroundImg}
                style={{
                  width: '35%',
                  height: '35%',
                  position: 'relative',
                  top: 50,
                  left: 30,
                }}
              />
            </View>

            <Text style={{ color: '#fff', fontSize: 12, fontWeight: 600 }}>
              Receipt
            </Text>
          </View>

          <View style={{ marginHorizontal: 110 }}>
            <View
              style={{
                marginTop: 40,
                backgroundColor: 'lightblue',
                borderRadius: 3,
                paddingHorizontal: 2,
                paddingVertical: 2,
                alignItems: 'center',
                width: '20%',
              }}
            >
              <Text style={{ color: 'blue', fontSize: 7, width: 'auto' }}>
                International Wire
              </Text>
            </View>

            <View style={{ paddingTop: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 900 }}>
                {billFrom.EnterAmount}
              </Text>
            </View>

            <View style={{ paddingTop: 10 }}>
              <Text style={{ fontSize: 12, color: '#aaa' }}>
                {billFrom.date}
              </Text>
            </View>

            <View style={{ paddingTop: 15 }}>
              <Text style={styles.label}>Recipient Name</Text>
              <Text style={{ fontSize: 14 }}>{billFrom.RecipientName}</Text>
            </View>

            <View style={{ paddingTop: 15 }}>
              <Text style={styles.label}>SWIFT Code</Text>
              <Text style={styles.input}>{billFrom.SwiftCode}</Text>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#bbb',
              }}
            >
              <Text style={styles.label}>Account Number</Text>
              <Text style={styles.input}>{billFrom.AccountNumber}</Text>
            </View>

            <View
              style={{
                paddingTop: 15,
                borderBottomWidth: 1,
                paddingBottom: 12,
                borderBottomColor: '#bbb',
              }}
            >
              <Text style={styles.label}>Sender Name</Text>
              <Text style={{ fontSize: 14 }}>{billFrom.SenderName}</Text>
            </View>

            <View
              style={{
                paddingTop: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#bbb',
              }}
            >
              <Text style={styles.label}>Memo</Text>
              <Text style={styles.input}>{billFrom.Memo}</Text>
            </View>

            <View style={{ paddingTop: 15 }}>
              <Text style={{ fontSize: 12, color: 'blue' }}>Breakdown</Text>
            </View>

            <View style={{ paddingTop: 15, gap: 6 }}>
              <Text style={{ fontSize: 12, color: '#aaa' }}>Status</Text>
              <Text style={{ fontSize: 12, color: 'green' }}>Successful</Text>
            </View>

            <View style={{ paddingTop: 15, gap: 6 }}>
              <Text style={{ fontSize: 12, color: '#aaa' }}>Amount</Text>
              <Text style={{ fontSize: 14 }}>{billFrom.EnterAmount}</Text>
            </View>

            <View style={{ paddingTop: 15, gap: 6 }}>
              <Text style={{ fontSize: 12, color: '#aaa' }}>
                Recipient Name
              </Text>
              <Text style={{ fontSize: 14 }}>{billFrom.RecipientName}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default InvoicePDF
