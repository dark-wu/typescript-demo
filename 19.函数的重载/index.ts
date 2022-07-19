function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: number, y: string): string;
function add(x: string, y: number): string;

function add(x, y) {
    if (typeof x == 'string' || typeof y == 'string') {
        return `${x}或${y}为字符串`
    }
    return x + y;
}
add(1, 2);
add('1', '2');
add(1, '2');
add('1', 2);