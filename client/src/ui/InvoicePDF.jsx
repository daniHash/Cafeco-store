import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { formatCurrency } from '../utils/helper'
import { Font } from '@react-pdf/renderer'

Font.register({
  family: 'MochiyPopOne',
  src: '/fonts/MOCHIYPOPONE-REGULAR.TTF',
})
const styles = StyleSheet.create({
  page: {
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#f4e8d8',
    color: '#321e18',
    fontFamily: 'MochiyPopOne',
  },
  section: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemDetail: {
    fontSize: 12,
    color: '#555',
  },
  total: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 12,
    marginBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    paddingBottom: 2,
  },
})

export default function InvoicePDF({ orderId, address, cart, totalPrice }) {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Order Invoice</Text>

        <View style={styles.section}>
          <Text style={{ marginBottom: 15 }}>Order ID: {orderId}</Text>
          <Text>Shipping Address: {address}</Text>
        </View>

        <View style={styles.section}>
          <Text style={{ marginBottom: 5 }}>Items:</Text>
          {cart.map((item) => (
            <Text key={item.id} style={styles.item}>
              {item.title} — {item.quantity} x{' '}
              {item.totalprice.toLocaleString()}$
            </Text>
          ))}
          <Text style={styles.total}>Total: {formatCurrency(totalPrice)}</Text>
        </View>
      </Page>
    </Document>
  )
}
