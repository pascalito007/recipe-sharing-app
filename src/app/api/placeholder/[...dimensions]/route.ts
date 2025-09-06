import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ dimensions: string[] }> }
) {
  const resolvedParams = await params;
  const width = parseInt(resolvedParams.dimensions[0]) || 400;
  const height = parseInt(resolvedParams.dimensions[1]) || 300;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fef7ed;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#fed7a6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg-gradient)"/>
      <circle cx="${width/2}" cy="${height/2 - 20}" r="25" fill="#ed7611" opacity="0.3"/>
      <text x="50%" y="${height/2 + 10}" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="#b84408" text-anchor="middle" dominant-baseline="middle">
        🍳 Image de recette
      </text>
      <text x="50%" y="${height/2 + 30}" font-family="system-ui, sans-serif" font-size="12" fill="#de5c07" text-anchor="middle" dominant-baseline="middle">
        ${width} × ${height}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}