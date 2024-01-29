import {http} from "@/utils/http";
import {TestResponse} from "@/app/lib/types/test";

const TestServiceId = {
    TEST: '/test'
}

function test(): Promise<TestResponse> {
    return http.get(TestServiceId.TEST).then(res => res?.data?.data).catch(error => error);
}

export const testService = {
    test,
}
export default testService;
