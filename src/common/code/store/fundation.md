---
title: 存储
---

存储-计算的基石。

## bit 与 byte

**最小的存储单元 bit**

计算机最小存储单元为一个 bit，由于 bit 只有两种状态 0 和 1，非常容易被模拟，所以实现 bit 的方法有多种，可以基于电子元件、磁性元件、逻辑门或软件程序等不同的技术和方法来实现。

**byte 的出现**

8 个 bit 组成一个 byte，计算机最小的存储单位是 bit（比特），而最小的可寻址的存储单元是 byte（字节），使用 byte 作为地址的最小单位主要是为了提高数据访问的效率和灵活性。

**寻址和申请空间以 byte 作为最小单位**，所以每个 byte 在内存中都有一个唯一的地址，而 bit 却没有，我们无法直接操作一个 bit，只能通过语言提供的位操作来间接实现对某一位的读写。

## 内存与寄存器

**寄存器**

寄存器是计算机处理器中的一种特殊的存储器件，用于存储 CPU 的指令、操作数和中间结果等数据。与其他存储器件不同，寄存器是 CPU 内部集成的，位于 CPU 的芯片上，访问速度非常快，通常可以在一个时钟周期内完成读写操作。在计算机的指令集中，一些指令可以直接对寄存器进行操作，而不需要访问内存，这也是寄存器的一大优势。

寄存器通常分为多个不同的类别，例如通用寄存器、专用寄存器、标志寄存器等。其中，通用寄存器是 CPU 中最常见的寄存器之一，用于存储 CPU 执行指令时所需要的操作数和中间结果等数据。通用寄存器的数量和位宽度通常取决于 CPU 的架构和设计，常见的 CPU 架构如 x86 和 ARM 都有不同数量和类型的通用寄存器。

除了通用寄存器之外，还有一些专用寄存器，用于存储一些特定的数据，例如指令指针寄存器（Instruction Pointer，简称 IP）用于存储当前正在执行的指令的地址，栈指针寄存器（Stack Pointer，简称 SP）用于存储栈的地址等。这些专用寄存器通常不能被程序直接访问或修改，它们的值由 CPU 内部自动控制。

标志寄存器用于存储一些 CPU 运算过程中的状态信息，例如进位标志、零标志、负数标志等。这些标志位的值通常由 CPU 内部自动设置，程序可以通过读取标志寄存器的值来判断 CPU 的运算结果。

**内存访问流程**

内存访问流程是指 CPU 访问内存时的具体过程。一般而言，CPU 需要将内存中的数据读入寄存器进行计算，或者将计算结果写回到内存中。下面是典型的内存访问流程：

1. CPU 发出内存读取/写入请求，请求包含要访问的内存地址和访问类型（读取或写入）。
2. 内存控制器接收到请求后，先进行地址解码，确定要访问的内存块和偏移量，并检查访问权限。
3. 如果内存块在高速缓存中，内存控制器会将缓存中的数据读取出来，并将其返回给 CPU。如果内存块不在高速缓存中，内存控制器会将其从内存中读取出来。
4. 如果 CPU 要执行写入操作，内存控制器会将数据写入内存，并等待写入完成。如果 CPU 要执行读取操作，内存控制器会将数据返回给 CPU。
5. CPU 在接收到内存返回的数据后，会将其存储到寄存器中进行后续的计算。

在实际应用中，为了提高内存访问速度和效率，现代计算机往往采用多级缓存的设计，将高速缓存和主内存结合起来。CPU 首先会在 L1 缓存中查找数据，如果未命中则会继续在 L2、L3 等缓存层次中查找，最终才会从主内存中读取数据。这样可以大大降低内存访问的延迟和带宽消耗，提高计算机的性能和效率。

## 线程

线程（Thread）是计算机中的基本执行单元，它是进程中的一个独立的、可调度的执行单元。线程通常被称为轻量级进程，因为它们共享进程的内存空间和系统资源，但拥有自己的栈空间和程序计数器。

线程可以分为用户级线程和内核级线程。用户级线程是由用户自己创建和管理的线程，它们不依赖于操作系统的线程管理机制，而是由应用程序自己实现线程的调度和管理。内核级线程则是由操作系统创建和管理的线程，它们依赖于操作系统的线程管理机制，操作系统负责线程的调度和管理。

**一个线程通常包括以下几个部分**

1. 线程 ID：每个线程都有一个唯一的线程 ID，可以用来区分不同的线程。
2. 寄存器上下文：线程的寄存器上下文包括了线程在执行时所有使用到的寄存器的值。当线程被抢占或者进入阻塞状态时，寄存器上下文会被保存在线程控制块（TCB）中，以便线程重新运行时能够从保存的上下文中恢复。
3. 线程栈。
4. 线程控制块（TCB）：TCB 是操作系统用来管理线程的数据结构，它包括了线程的状态、优先级、上下文信息等。当线程被抢占或者进入阻塞状态时，TCB 会被保存在操作系统内部的数据结构中，以便线程重新运行时能够从保存的 TCB 中恢复。

**线程栈**

每个**线程**在创建时会分配一块连续的内存空间作为栈空间，空间大小是由操作系统决定的。因为每个线程的栈空间地址是不同的，所以对栈空间的读写是线程安全的。如果栈空间使用大小超出其分配的大小，会出现栈溢出的现象。

在一些常见的操作系统中，线程栈内存空间大小通常在 2MB 左右，但这个大小可以被调整。例如，Linux 中可以通过 ulimit 命令或者 pthread_attr_setstacksize 函数来设置线程栈大小。在 Windows 中，线程栈大小默认为 1MB，但可以通过创建线程时传递 STACK_SIZE_PARAM_IS_A_RESERVATION 参数来指定线程栈大小。

在创建线程时，操作系统会为每个线程分配一段栈空间，并将这个栈空间映射到**线程的虚拟地址**空间中。线程可以使用这个栈空间来存储局部变量、函数调用参数、返回地址等数据。

**线程栈运行原理**

1. 栈的创建和初始化\
   当线程创建时，操作系统会为该线程分配一块内存空间，作为线程栈。然后，操作系统会将线程栈的初始状态设置为一个空栈，也就是栈顶指针初始化为栈底地址。
2. 函数调用和栈帧的压入\
   当线程执行函数调用语句时，会将函数的参数、返回地址和上下文信息等数据压入线程栈顶。这个过程叫做压栈。每一次函数调用都会生成一个新的栈帧，将该函数的局部变量、参数、返回地址和上下文信息等保存到栈帧中。这个栈帧会被压入到线程栈的栈顶处。
3. 函数执行\
   当函数开始执行时，会从栈帧中读取该函数的参数和局部变量等数据，并将它们存储在 CPU 寄存器或栈中。然后，程序会按照函数的执行流程进行计算和执行。在函数执行过程中，函数可能会调用其他函数，这时，又会将新函数的栈帧压入线程栈的栈顶处。
4. 函数返回和栈帧的弹出\
   当函数执行完毕时，会将返回值压入栈顶，并弹出当前函数的栈帧。弹出栈帧时，栈指针会回到上一个栈帧的位置，也就是上一次函数调用的位置。然后，程序会按照返回地址返回到调用该函数的函数中。在函数返回时，函数的返回值和执行结果会被存储在寄存器或栈中。
5. 栈的释放\
   当线程执行完毕或被终止时，操作系统会释放线程栈的内存空间，这样，线程所占用的内存就被释放了。

## 进程

进程是计算机中资源分配的基本单位。操作系统通过进程调度器来管理多个进程的调度和切换，从而实现多道程序并发执行。一个进程可以有多个线程，各线程共享进程的数据和代码，但每个线程有自己的栈空间和寄存器上下文，从而实现更加细粒度的并发执行。

**一个进程包括以下几个部分**

1. 程序代码：即进程要执行的指令，它通常保存在程序文件中。在运行时，程序代码被读入内存中，并由 CPU 逐条执行。
2. 数据：进程在运行过程中需要使用的数据，包括全局变量、静态变量、堆和栈等。
3. 进程控制块（Process Control Block, PCB）：进程控制块是操作系统中非常重要的概念，它是操作系统管理进程的关键数据结构之一，用于描述进程的各种属性和状态，如进程状态、程序计数器、CPU 寄存器、打开文件列表、内存地址空间、调度信息等。进程控制块的数据结构在不同的操作系统中可能略有差异，但它们的基本功能是相似的，都是为了实现进程管理、进程调度和进程通信等功能。
4. 资源：进程所需要的各种系统资源，如 CPU 时间片、内存空间、I/O 设备等。进程在运行过程中需要占用一定的系统资源，操作系统通过资源管理器来分配和管理这些资源，以保证系统的稳定性和高效性。

**进程内存模型**

1. 代码段（Text Segment）：也称为只读段，存放着程序代码和常量数据。这部分内存通常是只读的，不允许修改。在运行时，CPU 从代码段中读取指令并执行。代码段通常是共享的，即多个进程可以共享同一个代码段，这样可以节省内存空间。
2. 数据段（Data Segment）：也称为已初始化数据段，存放着程序中已经初始化的全局变量和静态变量等数据。这部分内存通常是可读写的。数据段的大小在程序编译时就已经确定了，因此它的大小是固定的。
3. BSS 段（Block Started by Symbol）：也称为未初始化数据段，存放着程序中未初始化的全局变量和静态变量等数据。这部分内存通常是可读写的，但是初始化的工作由操作系统完成。BSS 段的大小在程序编译时就已经确定了，因此它的大小是固定的。
4. 堆（Heap）：存放着动态分配的内存空间，包括通过 malloc、new 等函数动态分配的内存。堆的大小不固定，可以动态增加或减少。
5. 进程栈（Stack）：存放着函数调用的现场信息，包括函数的参数、局部变量、返回地址等。栈的大小在程序运行时是动态变化的，每当一个函数被调用时，栈就会分配一定的空间，函数执行结束后，栈空间就会被释放。栈的大小通常比堆小，但是栈的分配和释放速度要快得多。
6. 堆栈区间之间是自由存储区（Free Store），一般由应用程序管理。

**进程虚拟地址空间**

进程虚拟地址空间是指操作系统为每个进程分配的一段虚拟地址空间，用于存储进程的代码、数据、堆、栈等信息。虚拟地址空间是逻辑上的概念，与物理内存是分开的，它的大小和布局由操作系统决定，并且对不同的进程可以是不同的。

在 x86 架构下的操作系统中，每个进程都有一个 4GB 的虚拟地址空间，其中最高的 1GB 保留给操作系统，剩下的 3GB 是进程可用的地址空间，对于每个进程而言都好像独享了整个虚拟地址空间。在 x86_64 架构下，每个进程的虚拟地址空间最大为 2^48 字节，即 256TB。这是因为 x86_64 架构使用了 48 位地址总线，可以寻址的最大物理内存为 2^48 字节。但实际上，操作系统并不会为每个进程分配如此大的虚拟地址空间，因为大部分进程都不需要这么大的空间。相反，操作系统会动态地根据进程的实际需要分配虚拟地址空间。例如，对于 64 位操作系统上的普通应用程序，其虚拟地址空间大小通常为 4GB 到 8GB 左右，但是是可以修改的。

操作系统为每个进程提供了虚拟地址空间与物理内存的映射关系，虚拟地址通过内存管理单元（MMU）的地址转换机制转换为物理地址，最终访问到物理内存中的数据。因此，进程可以独立地使用虚拟地址空间，不需要考虑物理内存的分配和管理问题。同时，虚拟地址空间的使用也提高了系统的安全性，避免了进程之间互相干扰的情况。

**进程栈**

进程栈是属于整个进程的，用于存储进程中所有线程的数据，在进程启动时被分配初始大小，但是它的实时大小并不是固定的，只是有最大限制 RLIMIT_STACK (一般为 8M)，我们可以通过 ulimit 来查看或更改 RLIMIT_STACK 的值。

线程栈通常会存储与线程相关的信息，如线程的状态、优先级、栈顶指针等，以便操作系统能够对线程进行管理，其大小在初始化后不会再发生变化。

而进程栈则用于存储进程的函数调用现场和相关信息，以便程序能够在不同的函数之间跳转。

**进程堆**

进程堆（Process Heap）是指进程中用于动态分配内存的一块内存区域。在进程创建时，操作系统会为进程分配一定数量的虚拟地址空间，其中一部分被用来作为进程堆。堆是进程中与栈不同的另一种内存分配方式，它支持动态分配和释放内存，由程序员根据需要进行手动操作。

堆中存储的数据不像栈那样具有固定的大小和作用域。在堆中分配的内存块可以在程序的多个部分中访问和使用，直到该内存块被显式地释放为止。这使得堆成为动态分配内存的主要手段。

在使用堆之前，程序需要调用一些库函数，如 malloc、realloc 和 free，这些函数可以帮助程序动态地分配、重新分配和释放内存。由于堆的内存管理是由程序员自己负责的，因此如果使用不当，可能会导致内存泄漏、段错误等问题。为了避免这些问题，程序员需要仔细设计和管理程序的内存使用，避免内存泄漏和访问越界等错误。

**堆栈生长方向**

为了避免在栈上申请的空间和堆上的空间冲突，他们分配时在地址上是相反的。堆内存的分配会从低地址到高地址，栈内存的则从高地址到低地址。

## 内核态和用户态

在计算机系统中，内核态（Kernel Mode）和用户态（User Mode）是指运行在不同特权级别下的程序所处的状态。

内核态是操作系统内核运行的特权级别。当一个程序运行在内核态时，它可以直接访问操作系统的所有资源，包括 CPU、内存、磁盘、网络等，也可以执行所有的指令集，包括特权指令（Privileged Instruction）。操作系统内核通常以一种专门的方式编写，以确保内核可以保护系统的安全性和稳定性。

用户态是普通应用程序运行的特权级别。当一个程序运行在用户态时，它只能访问分配给它的资源，不能直接访问操作系统的资源，也不能执行特权指令。用户程序通常以一种通用的方式编写，它们需要通过操作系统提供的 API 来访问系统资源，例如，通过调用操作系统提供的系统调用（System Call）来完成文件读写、网络通信、进程管理等操作。

为了保证系统的稳定性和安全性，操作系统通常将内核态和用户态分离开来，使用特殊的硬件机制来控制程序运行的特权级别。当程序需要访问操作系统的资源时，它必须通过系统调用切换到内核态，由内核来处理这些请求。当请求处理完毕后，程序再切换回用户态，继续执行自己的任务。

需要注意的是，由于内核态拥有更高的特权级别，因此它的代码执行速度更快。但是，由于内核态可以访问所有的资源，如果内核代码出现了问题，就有可能导致整个系统崩溃。因此，在编写操作系统内核时，必须非常小心，确保代码的正确性和安全性。

## 数据存储大小端

由于内存地址以字节为基本读写单位，如果一个类型由多个字节组成，那么如何排列这多个字节有两种方向，由 CPU 架构决定。通常由 CPU 数据引脚和地址总线连接方式决定。

以一个 4 字节 16 进制数字举例：

![store1](./assets/store1.png)

现在我们使用的 arm64 和 x86 架构都是小端，大端则存在于 IBM、PowerPC 等的 cpu 架构中。网络通讯协议也是使用大端的方式进行数据传输的。

大小端只是多字节类型内部存储方向不同，其首地址和占用字节数在大小端系统下是一致的。

**网络字节序大小端转换**

网络字节序是大端字节序，主机字节序是小端字节序，因此，在进行网络通信时，通常需要进行大小端转换操作。

```cpp
#include <iostream>
#include <arpa/inet.h>
using namespace std;
int main()
{
    // 要转换的数据
    uint32_t value = 0x12345678;
    // 将数据从主机字节序转换为网络字节序
    uint32_t networkOrderValue = htonl(value);
    // 将数据从网络字节序转换为主机字节序
    uint32_t hostOrderValue = ntohl(networkOrderValue);
    // 输出转换前后的数据
    cout << "Original Value:        0x" << hex << value << endl;
    cout << "Network Byte Order:    0x" << hex << networkOrderValue << endl;
    cout << "Host Byte Order:       0x" << hex << hostOrderValue << endl;
    return 0;
}

```

**比特序**

上面我们图中最小单位为 byte，那其中 bit 的顺序是什么样子的呢。

在大多数情况下，比特序是按照自然顺序进行排列的，即最高有效位（MSB）位于最左边，最低有效位（LSB）位于最右边。例如，十进制数值 42 的二进制表示为 00101010，在自然顺序下，最高有效位“0”位于最左边，最低有效位“1”位于最右边。

但是，在某些情况下，比特序需要进行相反的排列，即最高有效位（MSB）位于最右边，最低有效位（LSB）位于最左边。例如，在某些通信协议中，比特序可能会被相反排列，以便于传输或处理数据。在这种情况下，需要进行比特序转换操作，将数据从一种比特序转换为另一种比特序。

需要注意的是，比特序和字节序其实没有关系，一个是指定单个字节中 bit 位的顺序，一个是指定多个字节数据类型中 byte 的顺序。

一般来说，网络传输中 bit 序也是大端的，比特序的转换是由操作系统的网络协议栈完成的。当操作系统接收到数据包时，会按照协议规定对数据包进行解析，并将其中的数据转换为主机比特序。这个过程中，涉及到网络接口卡、操作系统的协议栈以及应用程序等多个环节。在这个过程中，可能会涉及到硬件加速、操作系统内核的代码以及用户态的代码等多个层面的处理。
