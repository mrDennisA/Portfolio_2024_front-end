import jsonData from "@/json/info.json";

export async function GET(request) {
  return Response.json(jsonData, { status: 200 });
}
