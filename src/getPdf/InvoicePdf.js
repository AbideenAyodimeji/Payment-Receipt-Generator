import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer'
import logo from './logo.png'
import backgroundImg from './logo.png'

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 175,
    left: 160,
    width: '50%',
    height: '40%',
    zIndex: -1, // Ensure the headerBackground image stays behind other content
  },

  // headerBackground: {
  //   position: 'absolute',
  //   top: 10,
  //   left: 80,
  //   width: '30%',
  //   height: '20%',
  //   zIndex: 10,
  // },

  image: {
    width: 20, // Set the width of your image
    height: 20, // Set the height of your image
    color: 'white',
  },

  label: {
    fontSize: 8,
    marginBottom: 7,
    color: '#aaa',
  },
  input: {
    fontSize: 10,
    marginBottom: 6,
    paddingBottom: 5,
  },
})

const InvoicePDF = ({ billFrom, client, total, items }) => {
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
              backgroundColor: 'lightblue',
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
              <Image src={logo} style={styles.image} />
              <Text style={{ color: '#fff', fontSize: 12, fontWeight: 500 }}>
                Cudium
              </Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 0 }}>
              <Image
                src={backgroundImg}
                style={{
                  width: '50%',
                  height: '80%',
                  position: 'relative',
                  top: 51,
                  left: 45,
                }}
              />
              <Image
                src={backgroundImg}
                style={{
                  width: '50%',
                  height: '80%',
                  position: 'relative',
                  top: 51,
                  right: 10,
                }}
              />
            </View>

            <Text style={{ color: '#fff', fontSize: 12, fontWeight: 500 }}>
              Receipt
            </Text>
          </View>

          <View style={{ marginHorizontal: 110 }}>
            <View
              style={{
                marginTop: 40,
                backgroundColor: 'lightblue',
                borderRadius: 3,
                paddingHorizontal: 4,
                paddingVertical: 2,
                alignItems: 'center',
                width: '18%',
              }}
            >
              <Text style={{ color: 'blue', fontSize: 8, width: 'auto' }}>
                International Wire
              </Text>
            </View>

            <View style={{ paddingTop: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'extrabold' }}>
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
              <Text style={{ fontSize: 12 }}>{billFrom.RecipientName}</Text>
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
              <Text style={{ fontSize: 12 }}>{billFrom.SenderName}</Text>
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
              <Text style={{ fontSize: 10, color: 'blue' }}>Breakdown</Text>
            </View>

            <View style={{ paddingTop: 15, gap: 6 }}>
              <Text style={{ fontSize: 10, color: '#aaa' }}>Status</Text>
              <Text style={{ fontSize: 10, color: 'green' }}>Successful</Text>
            </View>

            <View style={{ paddingTop: 15, gap: 6 }}>
              <Text style={{ fontSize: 10, color: '#aaa' }}>Amount</Text>
              <Text style={{ fontSize: 12 }}>{billFrom.EnterAmount}</Text>
            </View>

            <View style={{ paddingTop: 15, gap: 6 }}>
              <Text style={{ fontSize: 10, color: '#aaa' }}>
                Recipient Name
              </Text>
              <Text style={{ fontSize: 12 }}>{billFrom.RecipientName}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default InvoicePDF
