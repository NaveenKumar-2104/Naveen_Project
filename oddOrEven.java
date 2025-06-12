class oddOrEven {
    static boolean isEven(int n) {
        if (n%2==0){
            return true;
        }else{
            return false;
        }
    }
    public static void main(String[] args) {
        int a = 4;
        int b = 5;
        System.out.println(isEven(a,b));
    }
}
