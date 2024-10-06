function isValidBase64EncodedJson(enc_json) {
    try {
        return JSON.parse(atob(enc_json))
    } catch {
        return false
    }
}

function selfplus(q, b) {
    return q.clone.add(b);
}

function formatGain(a, e, res = "", oom_max = 0.5) {
    const g = ExpantaNum.add(a, e.mul(diff))
    const DT = ExpantaNum("10^^6")

    if (g.neq(a)) {
        if (a.gte(DT)) {
            var oom = E(g).slog(10).sub(E(a).slog(10)).div(diff)
            if (oom.gte(1e-3)) return oom.format() + " OoM^^2"
        }

        if (a.gte('ee10')) {
            var tower = E(a).slog(10).sub(1.3010299956639813).floor();

            var oom = E(g).iteratedlog(10, tower).sub(E(a).iteratedlog(10, tower)).div(diff), rated = false;

            if (oom.gte(1)) rated = true
            else if (tower > 2) {
                tower--
                oom = E(g).iteratedlog(10, tower).sub(E(a).iteratedlog(10, tower)).div(diff)
                if (oom.gte(1)) rated = true
            }

            if (rated) return oom.format() + " OoM^" + tower
        }

        if (a.gte(1e50)) {
            const oom = g.div(a).log10().div(diff)
            if (oom.gte(oom_max)) return oom.format() + " OoM"
        }
    }

    return format(e) + res
}

function chunkArrayIntoGroupsOfTen(arr) {
    const chunkSize = 10;
    const result = [];
    for (let i in arr) {
        arr[i].id = Number(i) + 1
    }
    for (let i = 0; i < arr.length; i += chunkSize) {
        // 使用slice方法获取当前组的元素
        const chunk = arr.slice(i, i + chunkSize);
        result.push(chunk);
    }
    for (let i in result) {
        result[i].id = i
    }
    return result;
}