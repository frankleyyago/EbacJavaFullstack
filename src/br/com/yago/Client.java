package br.com.yago;

public class Client {
    private int code;

    private String name;

    private String address;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void addAddress(String address) {
        setAddress(address);
    }

    public void addressShow() {
        System.out.println((this.address));
    }
}
