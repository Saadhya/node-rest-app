# python function to check if a number is prime
def is_prime(num):
    """
    Checks if a number is prime
    Returns True if the number is prime, False otherwise
    """
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True