import { NextResponse } from 'next/server';
import test from 'node:test';

export async function POST(request: Request) {
  try {
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate processing time
    
    // Mock response - This will be connected to an AI transcription service later
    // const mockResponse = {
    //   shipper: [
    //     "Xin chào! Chị có đơn hàng.",
    //     "Đơn hàng của chị là từ cửa hàng ABC.",
    //     "Tổng cộng là 350,000 đồng."
    //   ],
    //   customer: [
    //     "Vâng, cảm ơn anh.",
    //     "Để tôi kiểm tra một chút.",
    //     "OK, tôi sẽ thanh toán bằng tiền mặt."
    //   ]
    // };
    const mockResponse = {
      text: "Hàng về anh ơi!"
    };
    
    return NextResponse.json(mockResponse, { status: 200 });
  } catch (error) {
    console.error('Error processing transcription:', error);
    return NextResponse.json(
      { error: 'Failed to process transcription' },
      { status: 500 }
    );
  }
}