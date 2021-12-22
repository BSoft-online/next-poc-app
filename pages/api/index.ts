import { withSentry } from '@sentry/nextjs';
import type { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse): void {
    // throw new Error('Test error');
    res.status(200);
}

export default withSentry(handler);