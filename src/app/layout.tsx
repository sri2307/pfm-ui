'use client'
import { store } from '@/store/store'
import { Provider } from 'react-redux'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <Provider store={store}>
                <body>{children}</body>
            </Provider>
        </html>
    )
}
