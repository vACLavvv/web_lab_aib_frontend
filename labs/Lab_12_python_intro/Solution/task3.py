from collections import Counter

def histogram(text):

    char_count = Counter(text)
    sorted_chars = sorted(char_count.keys())
    max_count = max(char_count.values())

    for i in range(max_count, 0, -1):
        for char in sorted_chars:
            if char not in (' ', '\n'):
                if char_count[char] >= i:
                    print('#', end='')
                else:
                    print(' ', end='')
        print()

    for char in sorted_chars:
        if char not in (' ', '\n'):
            print(char, end='')

if __name__ == "__main__":

    try:
        with open("input3.txt", "r") as file:
            encrypted_text = file.read()
    except FileNotFoundError:
        print("Файл input.txt не найден.")
        exit()

    histogram(encrypted_text)
