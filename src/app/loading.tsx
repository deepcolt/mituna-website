import Image from 'next/image'
import { DotLoader } from 'react-spinners'

export default function Loader() {
  return (
    <div
      style={{
        height: '100vh',
        background: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
        src="/assets/images/icon.png"
        alt="Bongola Chat logo"
        width={50}
        height={50}
        style={{ marginBottom: '30px' }}
      />
      <DotLoader color={'blue'} loading={true} size={50} />
    </div>
  )
}
