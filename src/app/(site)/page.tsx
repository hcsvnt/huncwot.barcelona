import type { Metadata } from 'next';
import styles from './styles.css';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Home page',
    description: 'Page description',
    keywords: ['page', 'keywords']
};

// todo: make this nicer one day
// eslint-disable-next-line functional/functional-parameters
export default async function Page() {
    const payload = await getPayload({ config: configPromise });

    const { docs: images } = await payload.find({
        collection: 'media',
        limit: 100,
        where: {
            // fileType: {
            //     equals: 'image'
            // }
        }
    });

    if (!images) {
        return null;
    }
    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>Huncwot Barcelona</h1>

            <div className={styles.gallery}>
                {images.map(({ url, alt, id, caption, width, height }) => (
                    <div key={id} className={styles.wrapper}>
                        <Image
                            className={styles.image}
                            src={url || ''}
                            alt={alt}
                            width={width || 0}
                            height={height || 0}
                        />
                        {/* <p>{typeof caption === 'string' ? caption : 'image missing?'}</p> */}
                    </div>
                ))}
            </div>
        </main>
    );
}
