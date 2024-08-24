let data = { locomotive: 'motor', hours: '12', minutes: '30' };

export async function POST(req) {
  try {
    data = await req.json();
  }
  catch (error) {
    return new Response("Invalid JSON", {status: 400});
  }

  console.log(data);

  return new Response("", {status: 200});
}


export function GET() {
  return new Response(JSON.stringify(data), {status: 200});
}


export function getData() {
  return data;
}
